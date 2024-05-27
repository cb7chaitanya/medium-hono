import { QuoteWindow } from "../components/Auth/quoteWindow"
import { AuthForm } from "../components/Auth/authForm"
import { ToastContainer } from "react-toastify"

export function Signup() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <AuthForm type="signup" />
            <div className="hidden lg:block">
                <QuoteWindow />
            </div>
            <ToastContainer />
        </div>
    )
}