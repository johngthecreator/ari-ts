import type { eqParams } from "./EqParams"

export const checkAns = (n: number, eqObj: eqParams) => {
    if((n == eqObj.answer)&&(n != -3)){
        return true
    }else if ((n != eqObj.answer)&&(n != -3)){
        return false
    }
}