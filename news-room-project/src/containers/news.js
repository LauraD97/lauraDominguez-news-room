import { connect } from 'react-redux'
import newsList from '../components/NewsList'
import { fetchNews } from '../actions';

const mapStateToProps = ({
    news,
    loading,
    loadingError
}) => ({
    news,
    loading, 
    loadingError
})

const mapDispatchToProps = dispatch => {
    return {
        fetchNewsList(path) {
            dispatch(fetchNews(path));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newsList);