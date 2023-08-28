"use client";

import { runningPlans } from "@/libs/runningPlans";
import {
  Button,
  Container,
  Group,
  Select,
  TextInput,
  Title,
} from "@mantine/core";

export default function Home() {
  return (
    <Container size="xs">
      <Title italic color="violet">
        Register CMU Marathon
      </Title>
      <Group grow>
        <TextInput label="First Name" placeholder="Input First Name" />
        <TextInput label="Last Name" placeholder="Input Last Name" />
      </Group>
      <Select data={runningPlans} label="Plan" placeholder="Select a Plan..." />
    </Container>
  );
}
