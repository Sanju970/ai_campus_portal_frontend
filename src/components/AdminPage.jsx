// components/AdminPage.jsx
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from './ui/select';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from './ui/table';
import { toast } from 'sonner';
import { Trash2, Plus } from 'lucide-react';

export default function AdminPage() {
  const [users, setUsers] = useState([
    {
      id: '1',
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice@campus.edu',
      userId: 'alice01',
      role: 'student',
      department: 'Computer Science',
    },
    {
      id: '2',
      firstName: 'Dr.',
      lastName: 'Smith',
      email: 'smith@campus.edu',
      userId: 'smith02',
      role: 'faculty',
      department: 'Engineering',
    },
  ]);

  const [newUser, setNewUser] = useState({
    firstName: '', lastName: '', email: '', userId: '', role: 'student', department: '',
  });

  const handleAddUser = () => {
    const { firstName, lastName, email, userId, department } = newUser;
    if (!firstName || !lastName || !email || !userId || !department) {
      toast.error('Please fill in all fields');
      return;
    }
    setUsers((prev) => [...prev, { id: crypto.randomUUID(), ...newUser }]);
    setNewUser({ firstName: '', lastName: '', email: '', userId: '', role: 'student', department: '' });
    toast.success('User added successfully');
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    toast.info('User deleted');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <p className="text-muted-foreground">Add or remove users from the system</p>
      </div>

      {/* Add New User */}
      <Card>
        <CardHeader><CardTitle>Add New User</CardTitle></CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            placeholder="First Name"
            value={newUser.firstName}
            onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
          />
          <Input
            placeholder="Last Name"
            value={newUser.lastName}
            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          />
          <Input
            placeholder="user@campus.edu"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <Input
            placeholder="User Id"
            value={newUser.userId}
            onChange={(e) => setNewUser({ ...newUser, userId: e.target.value })}
          />
          <Select
            value={newUser.role}
            onValueChange={(value) => setNewUser({ ...newUser, role: value })}
          >
            <SelectTrigger><SelectValue placeholder="Select Role" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="faculty">Faculty</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Department"
            value={newUser.department}
            onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
          />
          <Button className="col-span-1 md:col-span-4" onClick={handleAddUser}>
            <Plus className="h-4 w-4 mr-2" /> Add User
          </Button>
        </CardContent>
      </Card>

      {/* Existing Users */}
      <Card>
        <CardHeader><CardTitle>Existing Users ({users.length})</CardTitle></CardHeader>
        <CardContent className="overflow-x-auto">
          {users.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No users found</p>
          ) : (
            <Table className="w-full table-fixed border-collapse">
              {/* Lock widths per column so every row aligns perfectly */}
              <colgroup>
                <col style={{ width: '14%' }} /> {/* User ID */}
                <col style={{ width: '16%' }} /> {/* First Name */}
                <col style={{ width: '16%' }} /> {/* Last Name */}
                <col style={{ width: '22%' }} /> {/* Email */}
                <col style={{ width: '12%' }} /> {/* Role */}
                <col style={{ width: '16%' }} /> {/* Department */}
                <col style={{ width: '10%' }} /> {/* Action */}
              </colgroup>

              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="px-4 py-3 text-left">User ID</TableHead>
                  <TableHead className="px-4 py-3 text-left">First Name</TableHead>
                  <TableHead className="px-4 py-3 text-left">Last Name</TableHead>
                  <TableHead className="px-4 py-3 text-left">Email</TableHead>
                  <TableHead className="px-4 py-3 text-left">Role</TableHead>
                  <TableHead className="px-4 py-3 text-left">Department</TableHead>
                  <TableHead className="px-4 py-3 text-right">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {users.map((u) => (
                  <TableRow
                    key={u.id}
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                  >
                    <TableCell className="px-4 py-3 font-mono text-sm text-muted-foreground whitespace-nowrap">
                      {u.userId}
                    </TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">{u.firstName}</TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">{u.lastName}</TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">{u.email}</TableCell>
                    <TableCell className="px-4 py-3 capitalize whitespace-nowrap">{u.role}</TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">{u.department}</TableCell>
                    <TableCell className="px-4 py-3 text-right">
                      <Button
                        variant="destructive"
                        size="sm"
                        className="inline-flex items-center gap-1"
                        onClick={() => handleDeleteUser(u.id)}
                      >
                        <Trash2 className="h-4 w-4" /> Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
