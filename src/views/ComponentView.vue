<script setup lang="ts">
import BaseLink from "../components/Typography/BaseLink.vue";
import BaseAlert from "../components/Alert/BaseAlert.vue";
import BaseAlertFullWidth from "../components/Alert/BaseAlertFullWidth.vue";
import BaseButton from "../components/Button/BaseButton.vue";
import BaseButtonGroup from "../components/Button/BaseButtonGroup.vue";
import BaseHeading from "../components/Typography/BaseHeading.vue";
import BaseImg from "../components/Typography/BaseImg.vue";
import BaseP from "../components/Typography/BaseP.vue";
import BaseIcon from "../components/Icons/BaseIcon.vue";
import BaseButtonGroupItem from "../components/Button/BaseButtonGroupItem.vue";
import BaseTable from "../components/Table/BaseTable.vue";
import BaseTableHead from "../components/Table/BaseTableHead.vue";
import BaseTableBody from "../components/Table/BaseTableBody.vue";
import BaseTableRow from "../components/Table/BaseTableRow.vue";
import BaseTableHeadCell from "../components/Table/BaseTableHeadCell.vue";
import BaseTableCell from "../components/Table/BaseTableCell.vue";
</script>

<template>
  <main class="flex place-items-center">
    <div class="max-h-96 overflow-y-auto [&>*]:my-4">
      <BaseHeading tag="h1">Typography H1</BaseHeading>
      <BaseHeading tag="h2">Typography H2</BaseHeading>
      <BaseHeading tag="h3">Typography H3</BaseHeading>
      <BaseHeading tag="h4">Typography H4</BaseHeading>
      <BaseHeading tag="h5">Typography H5</BaseHeading>
      <BaseHeading tag="h6">Typography H6</BaseHeading>

      <BaseP>
        Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau
        typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an
      </BaseP>

      <BaseImg src="https://picsum.photos/seed/picsum/200/300" />

      <!-- By default, the icon and title will adjust according to the type -->
      <BaseAlert type="success" title="Success" description="Place your alert description in here">
        <template #icon><BaseIcon name="IconAlertSuccess" /> </template>
      </BaseAlert>

      <!-- By default, the icon will adjust according to the type -->
      <BaseAlertFullWidth type="success" description="Place your alert description in here">
        <template #icon><BaseIcon name="IconAlertSuccess" /></template>
      </BaseAlertFullWidth>

      <div class="flex w-full">
        <div class="mx-auto text-center">
          <BaseButton class="my-1" size="xl">
            <BaseIcon name="IconRefresh" /> <span>Button xl</span>
          </BaseButton>
          <BaseButton class="my-1" size="lg">
            <BaseIcon name="IconRefresh" /> <span>Button lg</span>
          </BaseButton>
          <BaseButton class="my-1" size="md">
            <BaseIcon name="IconRefresh" /> <span>Button md</span>
          </BaseButton>
          <BaseButton class="my-1" size="sm">
            <BaseIcon name="IconRefresh" /> <span>Button sm</span>
          </BaseButton>
          <BaseButton class="my-1" size="xs">
            <BaseIcon name="IconRefresh" /> <span>Button xs</span>
          </BaseButton>
        </div>
      </div>

      <BaseButtonGroup>
        <BaseButtonGroupItem>
          <BaseIcon name="IconUpload" /> <span>Upload</span>
        </BaseButtonGroupItem>
        <BaseButtonGroupItem>
          <BaseIcon name="IconDrift" /> <span>Drift</span>
        </BaseButtonGroupItem>
        <BaseButtonGroupItem> <BaseIcon name="IconView" /> <span>Views</span> </BaseButtonGroupItem>
      </BaseButtonGroup>

      <BaseLink href="https://google.com">Google</BaseLink>

      <BaseTable>
        <BaseTableHead>
          <BaseTableRow>
            <BaseTableHeadCell>Name</BaseTableHeadCell>
            <BaseTableHeadCell>Status</BaseTableHeadCell>
            <BaseTableHeadCell>Role</BaseTableHeadCell>
            <BaseTableHeadCell>Email Address</BaseTableHeadCell>
            <BaseTableHeadCell></BaseTableHeadCell>
          </BaseTableRow>
        </BaseTableHead>
        <BaseTableBody>
          <BaseTableRow>
            <BaseTableCell>User1</BaseTableCell>
            <BaseTableCell>Active</BaseTableCell>
            <BaseTableCell>Admin</BaseTableCell>
            <BaseTableCell>user1@example.com</BaseTableCell>
            <BaseTableCell class="flex">
              <BaseButton class="text-gray-600" color="bg-none">
                <BaseIcon name="IconDrift" />
              </BaseButton>
              <BaseButton class="text-gray-600" color="bg-none">
                <BaseIcon name="IconView" />
              </BaseButton>
            </BaseTableCell>
          </BaseTableRow>
          <BaseTableRow>
            <BaseTableCell>User2</BaseTableCell>
            <BaseTableCell>Active</BaseTableCell>
            <BaseTableCell>Admin</BaseTableCell>
            <BaseTableCell>user2@example.com</BaseTableCell>
            <BaseTableCell class="flex">
              <BaseButton class="text-gray-600" color="bg-none">
                <BaseIcon name="IconDrift" />
              </BaseButton>
              <BaseButton class="text-gray-600" color="bg-none">
                <BaseIcon name="IconView" />
              </BaseButton>
            </BaseTableCell>
          </BaseTableRow>
          <BaseTableRow>
            <BaseTableCell>User3</BaseTableCell>
            <BaseTableCell>Active</BaseTableCell>
            <BaseTableCell>Admin</BaseTableCell>
            <BaseTableCell>user3@example.com</BaseTableCell>
            <BaseTableCell class="flex">
              <BaseButton class="text-gray-600" color="bg-none">
                <BaseIcon name="IconDrift" />
              </BaseButton>
              <BaseButton class="text-gray-600" color="bg-none">
                <BaseIcon name="IconView" />
              </BaseButton>
            </BaseTableCell>
          </BaseTableRow>
        </BaseTableBody>
      </BaseTable>
    </div>
  </main>
</template>

<style scoped></style>
