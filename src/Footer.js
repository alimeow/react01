const Footer = ({length}) => {
  return (
    <footer>
      {/* <p>copyright &copy; {new Date().getFullYear()}</p> */}
      <p>{length} {length === 1 ? 'item' : 'items'}</p>
    </footer>
  )
};

export default Footer;