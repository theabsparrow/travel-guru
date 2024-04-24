import PropTypes from 'prop-types';


const Slider = ({ banner }) => {
    console.log(banner)
    return (
        <div className='text-white'>
            this is banner
        </div>
    );
};

Slider.propTypes = {
    banner: PropTypes.object
}
export default Slider;