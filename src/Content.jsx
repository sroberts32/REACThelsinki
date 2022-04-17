
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
	let arr = props.parts.map(function(item) {
		return (
			<div>
				<p> {item.name}: {item.exercises}</p>
			</div>
		)
	})
	
	return arr
};

export default Content;