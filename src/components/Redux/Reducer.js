Data ={
    'search':false
         }
const reducer = (state=Data,Actions)=>{
switch (Actions.type){
    case "Dsearch" :
        return !state.search;
    default:
       return state;
}
}
export default reducer