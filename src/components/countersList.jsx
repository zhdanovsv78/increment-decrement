import React,{useState} from "react"
import Counter from "./count"

const CountersList=()=>{

	const initialValue = [
		{id:0, value: 0, name:'Текст1'},
		{id:1, value: 1, name:'Текст2'},
		{id:2, value: 2, name:'Текст3'},
		{id:3, value: 3, name:'Текст4'}
	]

	const [counters, setCounters] = useState(initialValue)
	
	const handleReset=()=>{
		setCounters(initialValue)
	}

	const handleDelete=(id)=>{
		setCounters(counters.filter(item=>item.id!==id))
	}

	const handleOnIncrement=(id)=>{
		
		setCounters(counters.map(count=>{
			if(count.id===id){
				count.value++
				return count
			} else return count
		}))
		
	}


	const handleOnDecrement=(id)=>{
		setCounters(counters.map(count=>{
			if(count.id===id){
				count.value--
				return count
			} else return count
		}))
	}

	return(
		<>
		{counters.map(count=>
			<Counter 
				key={count.id} 
				onDelete={handleDelete} 
				onIncrement={handleOnIncrement} 
				onDecrement={handleOnDecrement}
				{...count}
			/>
		)}
		<button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
		</>
	)
}

export default CountersList