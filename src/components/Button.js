import React, { useState } from "react"

const Button = () => {
    const[count , SetCount] = useState(0)

    return (
         <div>
            <p>Button clicked {count} times.</p>
            <button onClick={() => {
                SetCount = count + 1
            }}>Click Me</button>

         </div>
    )
}

export default Button