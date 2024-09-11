import Link from "@/components/Reusables/Link/Link";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FiMail, FiLock } from "react-icons/fi";
import "../styles/LoginForm.scss";
export default function LoginForm() {
  return (
    <Form className="dv-login-form ">
      <h2 className="+u-pad-y-3 +u-bold">Welcome back!</h2>
      <Form.Group controlId="dv-login-email" className="dv-login-form__group">
        <Form.Label>Email</Form.Label>

        <InputGroup>
          <InputGroup.Text id="dv-email-icon">
            <FiMail />
          </InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="you@example.com"
            aria-label="Enter your email"
          />
        </InputGroup>
      </Form.Group>

      <Form.Group
        controlId="dv-login-password"
        className="dv-login-form__group"
      >
        <Form.Label>Password</Form.Label>

        <InputGroup>
          <InputGroup.Text id="dv-password-icon">
            <FiLock />
          </InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="At least 8 characters"
            aria-label="Enter your password"
          />
        </InputGroup>
      </Form.Group>
      <div className="dv-login-form__group">
        <Link href="#" shouldBold className="+u-pull-right">
          Forgotten password?
        </Link>
      </div>
      <Button className="+u-marg-y-4">Login</Button>
    </Form>
  );
}
