import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, company, phone, message, budget, timeline } = await request.json()

    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: "webitya01@gmail.com",
        pass: "ezccvasdgdrxhbcm",
      },
    })

    const mailOptions = {
      from: "webitya01@gmail.com",
      to: "webitya01@gmail.com",
      subject: `New Contact Form Submission from ${name} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background-color: #1447E6; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">3xGrowth Website</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #1447E6; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            
            <h3 style="color: #1447E6; margin-top: 30px;">Project Details</h3>
            ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ""}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
            
            <h3 style="color: #1447E6; margin-top: 30px;">Message</h3>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #1447E6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e4effe; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #1447E6; font-weight: 600;">Reply to this lead within 24 hours for best conversion rates!</p>
          </div>
        </div>
      `,
    }

    const autoReplyOptions = {
      from: "webitya01@gmail.com",
      to: email,
      subject: "Thank you for contacting 3xGrowth - We'll be in touch soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background-color: #1447E6; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">3xGrowth</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Account-Based Marketing Experts</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1447E6; margin-top: 0;">Hi ${name},</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Thank you for reaching out to 3xGrowth! We've received your inquiry and are excited to learn more about ${company}'s growth objectives.
            </p>
            
            <div style="background-color: #e4effe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1447E6;">
              <h3 style="color: #1447E6; margin-top: 0;">What happens next?</h3>
              <ul style="color: #374151; line-height: 1.6;">
                <li>Our team will review your submission within 24 hours</li>
                <li>We'll prepare a customized strategy recommendation</li>
                <li>You'll receive a detailed response with next steps</li>
                <li>We'll schedule a free consultation call if there's a good fit</li>
              </ul>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              In the meantime, feel free to explore our case studies and insights on our website. We look forward to discussing how we can help ${company} achieve 3x-5x performance improvements.
            </p>
            
            <div style="margin: 30px 0; text-align: center;">
              <a href="https://3xgrowth.com" style="background-color: #1447E6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">Visit Our Website</a>
            </div>
            
            <p style="font-size: 14px; color: #6b7280; margin-bottom: 0;">
              Best regards,<br>
              <strong style="color: #1447E6;">The 3xGrowth Team</strong><br>
              Account-Based Marketing Experts
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; text-align: center; color: #6b7280; font-size: 12px;">
            <p style="margin: 0;">© 2024 3xGrowth. All rights reserved.</p>
            <p style="margin: 5px 0 0 0;">15+ Years of B2B Marketing Excellence</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    return Response.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email sending failed:", error)
    return Response.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
