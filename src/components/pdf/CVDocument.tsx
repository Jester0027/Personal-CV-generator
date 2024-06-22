import {
  Document,
  Font,
  Link,
  Page,
  renderToBuffer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { Keys, Resume } from "@/types/Resume";
import {
  containerMargin,
  containerPadding,
  focusText,
  primaryColor,
  primaryText,
  primaryTextLight,
} from "@/components/constants";
import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WebIcon,
} from "@/components/pdf/icons";
import { ListItem } from "@/components/pdf/ListItem";

const getFontPath = (font: string) => {
  if (typeof window === "undefined") {
    return `${process.env.FONTS_PATH}/${font}.ttf`;
  }
  return `/fonts/${font}.ttf`;
};

Font.register({
  family: "Inter",
  src: getFontPath("Inter-Medium"),
  fontStyle: "normal",
  fontWeight: 500,
  fonts: [
    {
      family: "Inter",
      src: getFontPath("Inter-Thin"),
      fontWeight: 100,
    },
    {
      family: "Inter",
      src: getFontPath("Inter-Light"),
      fontWeight: 200,
    },
    {
      family: "Inter",
      src: getFontPath("Inter-Regular"),
      fontWeight: 300,
    },
    {
      family: "Inter",
      src: getFontPath("Inter-Medium"),
      fontWeight: 500,
    },
    {
      family: "Inter",
      src: getFontPath("Inter-SemiBold"),
      fontWeight: 600,
    },
    {
      family: "Inter",
      src: getFontPath("Inter-Bold"),
      fontWeight: 700,
    },
    {
      family: "Inter",
      src: getFontPath("Inter-ExtraBold"),
      fontWeight: 800,
    },
    {
      family: "Inter",
      src: getFontPath("Inter-Black"),
      fontWeight: 900,
    },
  ],
});

const styles = StyleSheet.create({
  document: {
    fontFamily: "Inter",
    fontSize: 9,
    color: primaryText,
  },
  header: {
    ...containerPadding,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    height: 75,
    backgroundColor: primaryColor,
  },
  header__left_pane: {
    display: "flex",
    letterSpacing: 4,
    flexDirection: "column",
    justifyContent: "center",
  },
  header__left_pane__title: {
    color: focusText,
    letterSpacing: 1.3,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 23,
  },
  header__left_pane__subtitle: {
    color: primaryText,
    fontWeight: "semibold",
    textTransform: "uppercase",
    fontSize: 12,
  },
  header__right_pane: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  header__right_pane__column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    alignItems: "flex-start",
    height: "100%",
  },
  header__right_pane__item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  header__right_pane__item_icon: {
    backgroundColor: primaryText,
    borderRadius: "50%",
    marginRight: 5,
    padding: 3,
    width: 17,
    height: 17,
  },
  header__right_pane__item_text: {
    color: primaryText,
    fontSize: 9,
    fontWeight: "normal",
  },
  content: {
    ...containerMargin,
    marginTop: 20,
  },
  content__title: {
    color: primaryTextLight,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  content__skills_list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  content__left_shift: {
    borderLeft: `4px solid ${primaryColor}`,
    paddingLeft: 10,
  },
  content__project__margin_top: {
    marginTop: 15,
  },
  content__project: {},
  content__project__title: {
    fontSize: 13,
    fontWeight: "semibold",
    color: focusText,
  },
  content__project__company: {
    fontSize: 10,
    fontWeight: "bold",
    color: primaryText,
  },
  content__project__subtitle: {
    fontSize: 10,
    color: primaryText,
    marginBottom: 5,
  },
  content__project__list: {
    marginTop: 5,
  },
});

interface CVDocumentProps {
  data: { keys: Keys; profile: Resume };
}

export function CVDocument({ data: { profile, keys } }: CVDocumentProps) {
  return (
    <Document style={styles.document}>
      <Page>
        <View style={styles.header}>
          <View style={styles.header__left_pane}>
            <Text style={styles.header__left_pane__title}>
              {profile.fullName}
            </Text>
            <Text style={styles.header__left_pane__subtitle}>
              {profile.title}
            </Text>
          </View>
          <View style={styles.header__right_pane}>
            <View style={styles.header__right_pane__column}>
              <View style={styles.header__right_pane__item}>
                <View style={styles.header__right_pane__item_icon}>
                  <PhoneIcon />
                </View>
                <Text style={styles.header__right_pane__item_text}>
                  {profile.phoneNumber}
                </Text>
              </View>
              <View style={styles.header__right_pane__item}>
                <View style={styles.header__right_pane__item_icon}>
                  <LocationIcon />
                </View>
                <Text style={styles.header__right_pane__item_text}>
                  {profile.location}
                </Text>
              </View>
            </View>
            <View style={styles.header__right_pane__column}>
              <View style={styles.header__right_pane__item}>
                <View style={styles.header__right_pane__item_icon}>
                  <MailIcon />
                </View>
                <Text style={styles.header__right_pane__item_text}>
                  {profile.email}
                </Text>
              </View>
              <View style={styles.header__right_pane__item}>
                <View style={styles.header__right_pane__item_icon}>
                  <WebIcon />
                </View>
                <Text style={styles.header__right_pane__item_text}>
                  <Link
                    style={{ textDecoration: "underline", color: primaryText }}
                    src={profile.website.link}
                  >
                    {profile.website.display}
                  </Link>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.content__title}>{keys.summary}</Text>
          <View style={styles.content__left_shift}>
            <Text>{profile.summary}</Text>
          </View>
          <Text style={styles.content__title}>{keys.mainSkills}</Text>
          <View style={styles.content__skills_list}>
            {profile.skills?.map((skill, index) => (
              <ListItem key={index}>{skill}</ListItem>
            ))}
          </View>
          <Text style={styles.content__title}>{keys.projects}</Text>
          {profile.experience?.map((project, index) => (
            <View
              key={index}
              style={
                index !== 0
                  ? {
                      ...styles.content__project__margin_top,
                      ...styles.content__project,
                    }
                  : styles.content__project
              }
            >
              <View style={styles.content__left_shift} break>
                <Text style={styles.content__project__title}>
                  {project.title}
                </Text>
                {project.company ? (
                  <Text style={styles.content__project__company}>
                    {project.company}
                  </Text>
                ) : null}
                <Text style={styles.content__project__subtitle}>
                  {project.subtitle}
                </Text>
                <View style={styles.content__project__list}>
                  {project.actions.map((action, index) => (
                    <ListItem key={index}>{action}</ListItem>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export const getDocumentBuffer = (data: { keys: Keys; profile: Resume }) =>
  renderToBuffer(<CVDocument data={data} />);
