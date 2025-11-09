import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY || 're_iGoAkmsf_8CBHPDCHXeS1PTK4bTqrQsBY');

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, organization, subject, message } = req.body;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Niroga Contact Form <onboarding@resend.dev>', // You'll need to verify your domain or use resend.dev for testing
      to: ['yasantha@niroga.ai'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
          
          <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${organization ? `<p style="margin: 10px 0;"><strong>Organization:</strong> ${organization}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message:</h3>
            <p style="color: #6B7280; line-height: 1.6;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 30px 0;">
          
          <p style="color: #9CA3AF; font-size: 12px;">
            This email was sent from the Niroga.ai contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      data 
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
