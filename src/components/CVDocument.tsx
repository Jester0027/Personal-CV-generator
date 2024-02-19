"use client";

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
import { PropsWithChildren } from "react";

Font.register({
  family: "Inter",
  src: "/fonts/Inter-Medium.ttf",
  fontStyle: "normal",
  fontWeight: 500,
  fonts: [
    {
      family: "Inter",
      src: "/fonts/Inter-Thin.ttf",
      fontWeight: 100,
    },
    {
      family: "Inter",
      src: "/fonts/Inter-Light.ttf",
      fontWeight: 200,
    },
    {
      family: "Inter",
      src: "/fonts/Inter-Regular.ttf",
      fontWeight: 300,
    },
    {
      family: "Inter",
      src: "/fonts/Inter-Medium.ttf",
      fontWeight: 500,
    },
    {
      family: "Inter",
      src: "/fonts/Inter-SemiBold.ttf",
      fontWeight: 600,
    },
    {
      family: "Inter",
      src: "/fonts/Inter-Bold.ttf",
      fontWeight: 700,
    },
    {
      family: "Inter",
      src: "/fonts/Inter-ExtraBold.ttf",
      fontWeight: 800,
    },
    {
      family: "Inter",
      src: "/fonts/Inter-Black.ttf",
      fontWeight: 900,
    },
  ],
});

const primaryText = "#838383";
const primaryTextLight = "#b3b3b3";
const focusText = "#000";

const primaryColor = "#dedede";

const defaultMarginLeft = 40;
const defaultMarginRight = 20;

const containerMargin = {
  marginLeft: defaultMarginLeft,
  marginRight: defaultMarginRight,
};

const containerPadding = {
  paddingLeft: defaultMarginLeft,
  paddingRight: defaultMarginRight,
};

const styles = StyleSheet.create({
  document: {
    fontFamily: "Inter",
    fontSize: 10,
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
    width: 15,
    height: 15,
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
  content__left_shift: {
    borderLeft: `4px solid ${primaryColor}`,
    paddingLeft: 10,
  },
  content__project: {},
  content__project__title: {
    fontSize: 13,
    fontWeight: "semibold",
    color: focusText,
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

interface CVDocumentProps {}

export function CVDocument({}: CVDocumentProps) {
  return (
    <Document style={styles.document}>
      <Page>
        <View style={styles.header}>
          <View style={styles.header__left_pane}>
            <Text style={styles.header__left_pane__title}>Paul Etienne</Text>
            <Text style={styles.header__left_pane__subtitle}>
              Software Developer
            </Text>
          </View>
          <View style={styles.header__right_pane}>
            <View style={styles.header__right_pane__column}>
              <View style={styles.header__right_pane__item}>
                <View style={styles.header__right_pane__item_icon} />
                <Text style={styles.header__right_pane__item_text}>
                  +123456789
                </Text>
              </View>
              <View style={styles.header__right_pane__item}>
                <View style={styles.header__right_pane__item_icon} />
                <Text style={styles.header__right_pane__item_text}>
                  Belgium
                </Text>
              </View>
            </View>
            <View style={styles.header__right_pane__column}>
              <View style={styles.header__right_pane__item}>
                <View style={styles.header__right_pane__item_icon} />
                <Text style={styles.header__right_pane__item_text}>
                  test@test.com
                </Text>
              </View>
              <View style={styles.header__right_pane__item}>
                <View style={styles.header__right_pane__item_icon} />
                <Text style={styles.header__right_pane__item_text}>
                  <Link
                    style={{ textDecoration: "underline", color: primaryText }}
                    src="https://github.com/Jester0027"
                  >
                    github.com/Jester0027
                  </Link>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.content__title}>Summary</Text>
          <View style={styles.content__left_shift}>
            <Text>
              I'm a full-stack software developer with a passion for creating
              robust and scalable applications. My expertise lies in C#/.NET,
              React, and Angular, and I'm also proficientin PHP, Symfony,NodeJS,
              PostgreSQL,Docker, and Kubernetes. Ithrive in a Linux environment
              and love exploring new technologies and methodologies to improve
              my craft.
            </Text>
          </View>
          <Text style={styles.content__title}>Main Skills</Text>
          <View>
            <Text>Javascript/Typescript</Text>
            <Text>PHP</Text>
            <Text>C#/.NET</Text>
            <Text>Symfony</Text>
            <Text>NestJS</Text>
            <Text>PostgreSQL</Text>
            <Text>ASP.NET Core</Text>
            <Text>React</Text>
            <Text>Angular</Text>
            <Text>Docker</Text>
            <Text>Linux (RHEL based)</Text>
            <Text>Kubernetes</Text>
          </View>
          <Text style={styles.content__title}>Projects</Text>
          <View style={styles.content__left_shift}>
            <View style={styles.content__project}>
              <Text style={styles.content__project__title}>
                Project 1: Project Name
              </Text>
              <Text style={styles.content__project__subtitle}>
                Company Name
              </Text>
              <View style={styles.content__project__list}>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores at blanditiis fuga illo quos. Dignissimos dolore
                  dolorem iusto labore laborum non possimus quasi, temporibus.
                  Consequuntur error esse nemo similique veritatis.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores at blanditiis fuga illo quos. Dignissimos dolore
                  dolorem iusto labore laborum non possimus quasi, temporibus.
                  Consequuntur error esse nemo similique veritatis.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores at blanditiis fuga illo quos. Dignissimos dolore
                  dolorem iusto labore laborum non possimus quasi, temporibus.
                  Consequuntur error esse nemo similique veritatis.
                </ListItem>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

function ListItem({ children }: PropsWithChildren) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        position: "relative",
      }}
    >
      <View
        style={{
          backgroundColor: primaryTextLight,
          borderRadius: "50%",
          marginRight: 5,
          width: 4,
          height: 4,
          position: "absolute",
          top: 4,
        }}
      />
      <Text style={{ marginLeft: 15 }}>{children}</Text>
    </View>
  );
}

export const getDocumentBuffer = () => renderToBuffer(<CVDocument />);
