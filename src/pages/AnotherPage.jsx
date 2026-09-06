import useUIStore from '../stores/uiStore';

const AnotherPage = () => {

    const { searchQuery, filter } = useUIStore();
    
  return (
    <div>
        This is search query - {searchQuery}.
        This is filter - {filter}.
        Hello world
    </div>
  )
}

export default AnotherPage
