

interface Props {
  cardItemCount: number;
}

const Navbar = ({ cardItemCount }: Props) => {
  return <div>Navbar: {cardItemCount}</div>;
};

export default Navbar;
