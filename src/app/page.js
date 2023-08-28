"use client";

import { runningPlans } from "@/libs/runningPlans";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Modal,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container size="xs">
      <Title italic color="violet">
        Register CMU Marathon
      </Title>
      <Group grow>
        <TextInput label="First Name" placeholder="Input First Name" required />
        <TextInput label="Last Name" placeholder="Input Last Name" required />
      </Group>
      <TextInput
        label="email"
        placeholder="Input email"
        required
        type="email"
      />
      <Select
        data={runningPlans}
        label="Plan"
        placeholder="Select a Plan..."
        required
        searchable
      />
      <Group spacing="xs">
        <Checkbox />{" "}
        <Text>
          I accept <Anchor onClick={open}> terms and conditions </Anchor>
        </Text>
      </Group>
      <Button type="submit">Register</Button>

      <Modal opened={opened} onClose={close} title="terms and conditions">
        <Text>
          1. Some terms and conditions... <br />
          2. Some terms and conditions... <br />
          3. Some terms and conditions...
        </Text>
        <Button onClick={close}>Confirm</Button>
      </Modal>
    </Container>
  );
}
