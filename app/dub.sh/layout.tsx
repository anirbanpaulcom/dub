import Nav from "#/ui/home/nav";
import Footer from "#/ui/home/footer";
import Background from "#/ui/home/background";

export default function MarketingLayout(props) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Only show stats modal if not on the /stats page */}
      {props.children.props.childProp.segment !== "stats" && props.modal}
      <Nav />
      {props.children}
      <Footer />
      <Background />
    </div>
  );
}