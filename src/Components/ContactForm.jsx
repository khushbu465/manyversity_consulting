import { Form, FormGroup, Input, Button, FormFeedback, Label } from "reactstrap";
import React, { useState } from "react";
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            const payload = {
                name: formData.name,
                mobile: formData.mobile,
                email: formData.email,
                message: formData.message,
            }
            const response = await fetch('https://api.manyversity.com/visitors/contact_studyabroad', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });
            const result = await response.json()
            if (result.status === 1) {
                toast.success(result.message);
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    message: ""
                });
            } else {
                toast.error(result.message)
            }
        } else {
            e.target.classList.add('was-validated')
        }
    }
    return (
        <>

            <Form id="contact_form" noValidate onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        id="name"
                        name="name"
                        type="text" required
                        placeholder="Your Name*"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <FormFeedback>Name is required.</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address*" required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <FormFeedback>
                        Please enter email address.
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input
                        id="mobile"
                        name="mobile"
                        type="number"
                        placeholder="Mobile No.*" required
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    <FormFeedback>
                        Please enter mobile number.
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Input
                        id="message"
                        name="message"
                        type="textarea" required
                        placeholder="Enter Your Message here"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <FormFeedback>Message is required.</FormFeedback>
                </FormGroup>

                <Button className="btn-two border">
                    <i className="fa-light fa-paper-plane " /> Send
                </Button>
            </Form>
        </>
    )
}

export default ContactForm
