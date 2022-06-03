import Paws from '../../assets/paws.gif'
import PropTypes from 'prop-types'

export default function Loading({ size = 300, margin = '0 0 60px' }) {
    return (
        <div align={'center'} style={{ margin }}>
            <img src={Paws} alt="loading..." height={size} />
        </div>
    )
}

Loading.propTypes = {
    size: PropTypes.number,
    margin: PropTypes.string,
}
