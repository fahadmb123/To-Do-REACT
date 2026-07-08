import Item from '../ToDoItem/ToDoItem';



function List () {
    return (
        <>
            <div className="task-list">
                <Item title='Learn DSA' date='08 jun 2007' completed={true}/>

                <Item title='Learn REACT' date='12 Mar 2007' completed={false}/>
                <Item title='Learn REACT' date='12 Mar 2007' completed={false}/>
                <Item title='Learn REACT' date='12 Mar 2007' completed={false}/>
                <Item title='Learn REACT' date='12 Mar 2007' completed={false}/>
            </div>
        </>
    )
}


export default List 