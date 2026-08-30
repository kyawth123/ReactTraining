import useTodoStore from '../stores/todoStore';

const AnotherPage = () => {

    const { searchQuery, filter } = useTodoStore();
    
  return (
    <div>
        This is search query - {searchQuery}.
        This is filter - {filter}.
    </div>
  )
}

export default AnotherPage
