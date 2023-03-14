import React,{useState} from "react"

const Counter=(props)=>{
	// const [value, setValue] = useState(props.value)
	
	const {value} = props
	// console.log(value)
	// const [count, setCount] = useState(0)
	
	const getClasses=()=>{
		let classes = "badge m-2 "
		return classes+=value===0?"bg-warning":"bg-primary"
	}

	const getCount=()=>{
		return value===0?"empty":value
	}

	const handleIncrement=(id)=>{
		
		// setValue((prevState)=>prevState + 1)
	}

	const handleDecrement=(id)=>{
		
		// setValue((prevState)=>prevState - 1)
	}


	return(
		<div>
			<span>{props.name}</span>
			<span className={getClasses()}>{getCount()}</span>
			<button className="btn btn-primary btn-sm m-2" onClick={()=>props.onIncrement(props.id)}>+</button>
			<button className="btn btn-info btn-sm" onClick={()=>props.onDecrement(props.id)}>-</button>
			<button className="btn btn-danger btn-sm m-2" onClick={()=>props.onDelete(props.id)}>Delete</button>
		</div>	
	)
}

export default Counter