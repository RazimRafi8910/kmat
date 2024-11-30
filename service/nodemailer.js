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
            to: data.email, // list of receivers
            subject: "confirmation of your EMET Scholarship registration ", // Subject line
            text: "", // plain text body
            html: `
              <p>Hello</p>
                <p> &ensp; ${data.name} registered from EMET SCHOLARSHIP Form The details of the request is shown below <br></p>
                <table style="border-collapse: collapse; width: 50%;">
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Name</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.name}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Mobile Number</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.mobile}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Email</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.email}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">gender</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.gender}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Date of Birth</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.dob}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Guardian Name</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.guardianName}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Guardian Number</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.guardianNumber}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Religion</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.religion}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Caste</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.caste}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Income</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.income}</td>
                </tr> 
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">House Name</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.houseName}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Street Name</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.streetName}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Place</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.place}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">City</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.city}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Pincode</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.pincode}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Post Office</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.postOffice}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">District</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.district}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">State</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.state}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Category</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.category}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">Stream Studied</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.streamStudied}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">State</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.state}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">College</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.collage}</td>
                </tr>
                <tr>
                    <td  style="border: 1px solid black; padding: 8px;">State</td>
                    <td  style="border: 1px solid black; padding: 8px;">${data.NLPtraining}</td>
                </tr>
                </table>
            `
          });
    } catch (error) {
        console.log(error)
    }
  
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
  
export default sendEmail