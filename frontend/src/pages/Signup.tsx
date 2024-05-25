import { QuoteWindow } from "../components/signup/quoteWindow"
import { AuthForm } from "../components/authForm"

export function Signup() {
    return (
        <div className="grid grid-cols-2">
            <AuthForm />
            <div className="invisible lg:visible">
                <QuoteWindow />
            </div>
        </div>
    )
}