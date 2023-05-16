import { FaChevronRight } from "react-icons/fa";

export const serverBlock = <p>Starting the Server...</p>;

export const commandBlock = (
  <>
    <p>You can run several commands:</p>
    <p className="code">
      about
      <br />
      <span>My introduction</span>
    </p>
    <p className="code">
      all
      <br />
      <span>View all commands</span>
    </p>
    <p className="code">
      social
      <br />
      <span>View social links</span>
    </p>
  </>
);

export const pathBlock = (
  <p className="path">
    # user
    <span> in</span>
    <span> ~/GramBam</span>
  </p>
);

export const noCommandBlock = (input: string) => (
  <p>command not found: {input}</p>
);

export const promptBlock = (success: boolean, input: string) => (
  <div className={`prompt ${success ? "success" : "failure"}`}>
    <FaChevronRight />
    <h2>{input}</h2>
  </div>
);
