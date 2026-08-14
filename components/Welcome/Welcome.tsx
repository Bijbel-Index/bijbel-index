import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Bijbel{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Index
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={640} mx="auto" mt="xl">
        De online tool met thema's, begrippen en overzichtelijke indeling van de Bijbel.
      </Text>
    </>
  );
}
