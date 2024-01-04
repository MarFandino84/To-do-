import styled from "styled-components"


export const TodoHeaderStyle = styled.form`
margin-top: 2em;
display: flex;
flex-direction: column;
justify-content: center; align-items: center;

label {
  font-style:italic;
  text-align: start;
}
input {
     width: 90vw;
     background-color: #00ccff;
     border-radius: 5px;
     padding: 3px; text-align: center;
&:hover {
      background-color: #46bbff;
     
}}
button {
     width: 90vw;
     padding: 5px 15px;
     margin-top: 1em;
     border-radius: 5px;
     background-color: blueviolet; gap: 15rem;
     &:hover {
     scale: 1.05;
     border: 1px solid white;
}     

}
`

export const InputDisplay = styled.div`
width: 50%;
padding: 1em; gap: 3px; display: flex;
justify-content: center; align-items: center;
   

`
export const RenderListStyle = styled.ul`
 gap: 3px; display: flex;
 justify-content: flex-start; 
 align-items: center;
li {
  text-decoration: none;
  margin: none; 
  color: white;
  font-style:italic;
}
button {
     color: red;
     padding: 5px 15px;
     margin-left: 1em;
     border-radius: 5px;
     border-color: red;
     background-color: #474747; gap: 15rem;
     &:hover {
     scale: 1.05;
     color: white;
     background-color: red;
}     
}`


export default TodoHeaderStyle; InputDisplay, RenderListStyle