<!-- navbar base code adopted from https://sveltestrap.js.org/?path=/story/components--navbar -->
<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';
	import ThemeSwitch from './ThemeSwitch.svelte';

  let isOpen = false;

  function handleUpdate(event:any) {
    isOpen = event.detail.isOpen;
  }

 //my code
 let sitename = "pgj.xyz"

</script>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/">{sitename}</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="#components/">Components</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/bestguy/sveltestrap">GitHub</NavLink>
      </NavItem>
      <Dropdown nav inNavbar>
        <DropdownToggle nav caret>Options</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <ThemeSwitch/>
    </Nav>
  </Collapse>
</Navbar>
