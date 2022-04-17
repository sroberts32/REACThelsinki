
const parts = [
{
      name:'Fundamentals of React ',
      exercises: 10,
},

{
      name:'Using props to pass data ',
      exercises: 7,
},

{
      name:'State of a component ',
      exercises: 14,
}
]


function Content(props) {
    return (
		<div>
            <p> {parts.name[0]} {parts.exercise[0]} </p>
            <p> {parts.name[1]} {parts.exercises[1]} </p>
            <p> {parts.name[2]} {parts.exercises[2]} </p>
		</div>
	);
}

export default Content;