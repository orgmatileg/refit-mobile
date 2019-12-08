import React from "react";
import { Card, CardHeader, Layout, Text } from "@ui-kitten/components";

export default function Screen(props) {
  return (
    <Layout style={{ padding: 13 }}>
      <Card
        style={{ marginBottom: 15 }}
        header={() => <CardHeader title="Weight Tracker" />}
      >
        <Text>87.3 kg / 23 December 2019</Text>
      </Card>
      <Card
        style={{ marginBottom: 15 }}
        header={() => <CardHeader title="Todo" />}
      >
        <Text>You have 7 item.</Text>
      </Card>
      <Card
        style={{ marginBottom: 15 }}
        header={() => <CardHeader title="Calorie" />}
      >
        <Text>Already eat 1500 cal. You still have 600</Text>
      </Card>
      <Card
        style={{ marginBottom: 15 }}
        header={() => <CardHeader title="Weight Tracker" />}
      >
        <Text>wew</Text>
      </Card>
    </Layout>
  );
}
