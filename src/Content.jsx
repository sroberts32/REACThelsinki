// 1.1 Step 1
// function Content(props) {
//     return (
// 		<div>
//             <p>{props.part}{props.exercise}</p>
// 		</div>
// 	);
// }

// 1.2 Step 2
import Part from "./Part";

const part1 = 'Fundamentals of React '
const exercises1 = 10
const part2 = 'Using props to pass data '
const exercises2 = 7
const part3 = 'State of a component '
const exercises3 = 14

function Content(props) {
    return (
		<div>
            <Part part = {part1} exercise = {exercises1} />
            <Part part = {part2} exercise = {exercises2} />
            <Part part = {part3} exercise = {exercises3} />
		</div>
	);
}

export default Content;