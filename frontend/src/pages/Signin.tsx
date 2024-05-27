import { QuoteWindow } from "../components/Auth/quoteWindow"
import { AuthForm } from "../components/Auth/authForm"
import { ToastContainer } from "react-toastify"

export function Signin() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <AuthForm type="signin" />
            <div className="invisible lg:visible">
                <QuoteWindow />
            </div>
            <ToastContainer />
        </div>
    )
}