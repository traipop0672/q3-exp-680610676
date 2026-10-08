import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerSwipeHandle,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

import { Button, buttonVariants } from "@/components/ui/button";
export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={
          <div className="flex-1 p-4">
            <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Traipop wichiansarn
            </button>
          </div>
        }
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <strong>ข้อมูลนักศึกษา</strong>
          </DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <img src="../public/profile.png" alt="..." />
          <div className="size-full rounded-2xl bg-muted" />
        </div>
        <div className="flex-1 p-4">
          <DrawerTitle>Traipop Wichiansarn</DrawerTitle>
          <DrawerDescription>
            นักศึกษาคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์
            มหาวิทยาลัยเชียงใหม่
          </DrawerDescription>
        </div>
        <DrawerFooter>
          <DrawerTitle>
            <strong>รหัสนักศึกษา : 680610676</strong>
          </DrawerTitle>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    //
  );
}
