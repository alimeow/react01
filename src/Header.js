const Header = ({title}) => {

  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
};

Header.defaultProps = {
  title: '[name your title]'
}

export default Header;