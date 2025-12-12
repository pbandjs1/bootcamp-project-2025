/* eslint-disable @typescript-eslint/no-require-imports */
import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: NextRequest) {
	try {
		const { name, email, message } = await req.json();

		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.GOOGLE_USER,
				pass: process.env.GOOGLE_APP_PASS,
			},
			tls: {
				rejectUnauthorized: false, 
			},
		});

		await transporter.sendMail({
			from: `${name} <${email}>`,
			to: "nikendresen@gmail.com",
			subject: "New Contact Message",
			text: message,
			html: `<p>${message}</p>`,
		});

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error("Email error:", err);
		return NextResponse.json({ error: "Email failed" }, { status: 500 });
	}
}
