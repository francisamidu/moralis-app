import { getSession, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";

// gets a prop from getServerSideProps
const User = ({ user }) => {
  return (
    <div className={styles.main}>
      <h4>
        Web3 Account: <span>{user.address}</span>{" "}
      </h4>

      <button
        className={styles.button}
        onClick={() => signOut({ callbackUrl: "/signin", redirect: true })}
      >
        Sign out
      </button>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
};

export default User;
