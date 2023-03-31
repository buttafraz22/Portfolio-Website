const express = require("express")
const router = express.Router()
const cors = require("cors")
const nodemailer = require("nodemailer")

// server setup to send emails
const PORT = 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use("/",router)
app.listen(PORT, () => console.log("Server is up and okay"))

const contactEmail = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:"athekiller009@gmail.com",
        pass:".samplePassword7#"
    }
})
contactEmail.verify((error) => {
    if(error) {
        console.log(error)
    }
    else {
        console.log("ready to send")
    }
})

router.post("/contact", (req,res) => {
    const name = req.body.firstName + req.body.lastName
    const email = req.body.email
    const message = req.body.message
    const phone = req.body.phone
    const mail = {
        from: name,
        to: "athekiller009@gmail.com",
        subject: "Contact Submission Form - Portfolio",
        html: `<p> Name: ${name} </p>
                <p> Email: ${email} </p>
                <p> Phone: ${phone} </p>
                <p> Message: ${message} </p>
                `
    }


    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json(error)
        }
        else {
            res.json({code : 200, status: "message sent"})
        }
    })
})