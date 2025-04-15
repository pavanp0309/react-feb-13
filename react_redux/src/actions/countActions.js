// creating the ACtion Types 
export let Increment="INCREMENT"
export let decrement="DECREMENT"

//step3: actions

export function IncrementCount(){
 return {
    type:Increment
 }
}

export function decrementCount(){
    return {
       type:decrement
    }
   }
   