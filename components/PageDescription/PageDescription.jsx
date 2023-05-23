import React from 'react'
import PropTypes from 'prop-types'

const PageDescription = ({title,text}) => {
  return (
    <section>
      <div className="container mx-auto">
        <h1>{title}</h1>
        <p className='page-description'>{text}</p>
      </div>
    </section>
  );
}

PageDescription.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
PageDescription.defaultProps = {
  title: 'TYTUŁ STRONY',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla lacus eget velit ultrices bibendum. Integer auctor turpis in mi efficitur, in posuere est consectetur. Donec pharetra ante eget luctus tempor. Proin aliquet faucibus quam ac accumsan. Praesent sit amet imperdiet enim. Maecenas a condimentum nisi, sed tempor neque. Maecenas ut ullamcorper magna. In laoreet nunc a odio ornare, non interdum eros suscipit. Proin pretium lorem non risus efficitur, varius tristique elit ullamcorper. Fusce condimentum hendrerit volutpat. Nunc nec ex non ante vestibulum pulvinar. Proin lacinia purus ac aliquet tempor.',
};

export default PageDescription