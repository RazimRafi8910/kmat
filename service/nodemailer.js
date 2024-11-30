import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "emetsrc@gmail.com",
    pass: "ujorzndtvskzbuwc",
  },
});

async function sendEmail(data) {
    // send mail with defined transport object
    try {
        const info = await transporter.sendMail({
            from: 'EMET SCHOLARSHIP', // sender address
            to: `${data.email},csa@sunrisecollege.ac.in`, // list of receivers
            subject: "Confirmation of your EMET Scholarship Registration !!! ", // Subject line
            text: "", // plain text body
            html: `
              <p>Dear ${data.name},</p>
                <p> &ensp; Thank you for registering for the EMET Scholarship Program. We are pleased to confirm the successful submission of your application. <br></p>
                <p>Here are your registration details: <br></p>
                <table style="border-collapse: collapse; width: 60%; border-radius: 5px;  font-family: Arial, sans-serif; border: 1px solid #ddd;">
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Name</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.name}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Mobile Number</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.mobile}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Email</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.email}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Gender</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.gender}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Date of Birth</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.dob}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Guardian Name</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.guardianName}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Guardian Number</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.guardianNumber}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Religion</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.religion}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Caste</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.caste}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Income</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.income}</td>
                </tr> 
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>House Name</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.houseName}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Street Name</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.streetName}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Place</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.place}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>City</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.city}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Pincode</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.pincode}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Post Office</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.postOffice}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>District</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.district}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>State</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.state}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Category</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.category}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>Stream Studied</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.streamStudied}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>College</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.collage}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td  style="border: 1px solid #ddd; padding: 8px; width:40%;"><strong>NLP training</strong></td>
                    <td  style="border: 1px solid #ddd; padding: 8px; width:60%;">${data.NLPtraining}</td>
                </tr>
                </table>
                <p>
                Finally, please click on the following link: wa.me/918606708444?text=EMET_Payment to obtain the QR code. Kindly proceed to pay the application fee of ₹140 using the QR code and follow the subsequent instructions as directed by the office.
                <br></p>
                <p>For more information, please contact us at <strong>8086704111</strong> or <strong>8086704222</strong>.</p>
                <p>Regards,</p>
                <p>Registration Desk</p>
                <p>EMET Scholarship</p>
            `
          });
    } catch (error) {
        console.log(error)
    }
  
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
  
export default sendEmail