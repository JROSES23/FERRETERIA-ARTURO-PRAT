import { NextRequest, NextResponse } from "next/server";

// Sanitize input to prevent injection
function sanitize(str: string): string {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, telefono, correo, sucursal, mensaje } = body;

    if (!nombre || !telefono || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const safe = {
      nombre: sanitize(nombre),
      telefono: sanitize(telefono),
      correo: sanitize(correo),
      sucursal: sanitize(sucursal || "No especificada"),
      mensaje: sanitize(mensaje),
    };

    // ====================================================
    // OPCIÓN 1: Resend (recomendado para producción)
    // ====================================================
    // 1. npm install resend
    // 2. Crea una cuenta en https://resend.com
    // 3. Obtén tu API Key
    // 4. Agrega en .env.local:
    //    RESEND_API_KEY=re_xxxxxxxxx
    //    CONTACT_EMAIL=tucorreo@dominio.cl
    // 5. Descomenta el bloque de abajo:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Ferretería Arturo Prat <noreply@ferreteriaarturoprat.cl>',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `Nueva cotización de ${safe.nombre} - ${safe.sucursal}`,
    //   html: `
    //     <h2>Nueva solicitud de cotización</h2>
    //     <p><strong>Nombre:</strong> ${safe.nombre}</p>
    //     <p><strong>Teléfono:</strong> ${safe.telefono}</p>
    //     <p><strong>Correo:</strong> ${safe.correo}</p>
    //     <p><strong>Sucursal:</strong> ${safe.sucursal}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${safe.mensaje}</p>
    //   `,
    // });

    // ====================================================
    // OPCIÓN 2: EmailJS (alternativa sin backend)
    // ====================================================
    // Se implementa desde el cliente directamente.
    // Ver documentación en https://www.emailjs.com/

    // Por ahora, log del mensaje (reemplazar con Resend en producción)
    console.log("📧 Nueva cotización recibida:", safe);

    return NextResponse.json({ success: true, message: "Cotización enviada correctamente" });
  } catch (error) {
    console.error("Error en /api/contact:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
