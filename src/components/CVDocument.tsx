import {
  Document,
  Page,
  renderToBuffer,
  Text,
  View,
} from "@react-pdf/renderer";

export function CVDocument() {
  return (
    <Document>
      <Page>
        <View>
          <Text>aoeoaeoea</Text>
        </View>
      </Page>
    </Document>
  );
}

export const getDocumentBuffer = () => renderToBuffer(<CVDocument />);
