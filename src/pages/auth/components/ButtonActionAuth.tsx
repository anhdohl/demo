import { StepTypeFunctionIF } from '../Interface/SignInInterface'

export default function ButtonActionAuth({
    StepType,
    setStepType,
}: StepTypeFunctionIF) {
    return (
        <>
            <button className="text-[#ffffff] bg-[#5F4DD7] rounded-2xl h-12">
                Button Continue with google
            </button>
            <div className="row-or-item">or</div>
            <button
                className="text-[#5F4DD7] border border-[#5F4DD7] rounded-2xl h-12"
                onClick={() =>
                    setStepType({
                        ...StepType,
                        screen: "auth_email_phone"
                    })
                }
            >
                Log in with phone / email
            </button>
        </>
    )
}
