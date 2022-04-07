import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import { loadTranslation } from "@/utils/translation";
import { i18n } from "@lingui/core";

const Profile = () => {
  // TODO: ensure this component is only rendered when authenticated
  // so we can simplify this logic
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="container">
        <ul>
          <li>
            {i18n._(/*i18n*/ "Name")}: {session.user.name}
          </li>
          <li>
            {i18n._(/*i18n*/ "Email")}: {session.user.email}
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="container">
      <p>{i18n._(/*i18n*/ "Not signed in.")}</p>
    </div>
  );
};
export default Profile;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );

  return {
    props: {
      translation,
    },
  };
};
