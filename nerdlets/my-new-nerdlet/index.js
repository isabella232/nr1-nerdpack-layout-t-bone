import React from 'react';
import {
  Grid,
  GridItem,
  Stack,
  StackItem,
  Dropdown,
  DropdownItem,
  TextField,
  Button
} from 'nr1';
import EmptyState from '../components/EmptyState';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class NerdpackLayoutTBone extends React.Component {
  render() {
    return (
      <>
        <Stack
          className="toolbar-container"
          fullWidth
          gapType={Stack.GAP_TYPE.NONE}
          horizontalType={Stack.HORIZONTAL_TYPE.FILL_EVENLY}
          verticalType={Stack.VERTICAL_TYPE.FILL}
        >
          <StackItem className="toolbar-section1">
            <Stack
              gapType={Stack.GAP_TYPE.NONE}
              fullWidth
              verticalType={Stack.VERTICAL_TYPE.FILL}
            >
              <StackItem className="toolbar-item has-separator">
                <Dropdown label="Dropdown" title="Choose an option">
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem>Option 3</DropdownItem>
                </Dropdown>
              </StackItem>
              <StackItem className="toolbar-item">
                <TextField label="Search" placeholder="e.g. example query" />
              </StackItem>
            </Stack>
          </StackItem>
          <StackItem className="toolbar-section2">
            <Stack
              fullWidth
              fullHeight
              verticalType={Stack.VERTICAL_TYPE.CENTER}
              horizontalType={Stack.HORIZONTAL_TYPE.RIGHT}
            >
              <StackItem>
                <Button type={Button.TYPE.PRIMARY}>Primary button</Button>
              </StackItem>
            </Stack>
          </StackItem>
        </Stack>
        <Grid
          className="primary-grid"
          spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
        >
          {/*
            Note: This sidebar does _not_ have to be a list of links/navigation.
            It can just as easily contain content. This is just an example of how it
            may be used.
          */}
          <GridItem className="primary-content-container" columnSpan={6}>
            <main className="primary-content full-height">
              {/* ⌄⌄ REPLACE THE LINE _BELOW_ WITH YOUR CONTENT ⌄⌄ */}
              <EmptyState heading="Column 1" />
              {/* ^^ REPLACE THE LINE _ABOVE_ WITH YOUR CONTENT ^^ */}
            </main>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={6}>
            <main className="primary-content full-height">
              {/* ⌄⌄ REPLACE THE LINE _BELOW_ WITH YOUR CONTENT ⌄⌄ */}
              <EmptyState heading="Column 2" description=" " />
              {/* ^^ REPLACE THE LINE _ABOVE_ WITH YOUR CONTENT ^^ */}
            </main>
          </GridItem>
        </Grid>
      </>
    );
  }
}
