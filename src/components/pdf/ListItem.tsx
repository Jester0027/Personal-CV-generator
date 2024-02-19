import { PropsWithChildren } from "react";
import { Text, View } from "@react-pdf/renderer";
import { primaryTextLight } from "@/components/constants";

export function ListItem({ children }: PropsWithChildren) {
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
