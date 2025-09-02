import { Form, FormGroup, Input, Button, FormFeedback, Label } from "reactstrap";
import React, { useState } from "react";
const ContactForm = () => {
    const [formData, setFormData] = useState({
        form_name: "",
        form_email: "",
        form_mobile: "",
        form_message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            console.log("Form submitted:", formData);
        } else {
            e.target.classList.add('was-validated')
        }

    }
    return (
        <>
            <Form id="contact_form" noValidate onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        id="form_name"
                        name="form_name"
                        type="text" required
                        placeholder="Your Name*"
                        value={formData.form_name}
                        onChange={handleChange}
                    />
                    <FormFeedback>Name is required.</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Input
                        id="form_email"
                        name="form_email"
                        type="email"
                        placeholder="Email Address*" required
                        value={formData.form_email}
                        onChange={handleChange}
                    />
                    <FormFeedback>
                        Please enter email address.
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input
                        id="form_mobile"
                        name="form_mobile"
                        type="email"
                        placeholder="Mobile No.*" required
                        value={formData.form_mobile}
                        onChange={handleChange}
                    />
                    <FormFeedback>
                        Please enter mobile number.
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Input
                        id="form_message"
                        name="form_message"
                        type="textarea" required
                        placeholder="Enter Your Message here"
                        value={formData.form_message}
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
