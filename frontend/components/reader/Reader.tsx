import { Text, View, Button, ScrollView } from 'react-native';
import { Chip } from '../ui/Chip';
import { Card } from '../ui/Card';
import Markdown from 'react-native-markdown-display';

const text = `
Bistro isn't just a fancy restaurant. It's a cutting-edge, distributed database management system designed for handling massive amounts of data across multiple servers. Let's break down its key components:

**1. Distributed Architecture:**  Bistro's strength lies in its distributed nature.  Instead of storing all data on a single server, it splits the data across multiple servers, each handling a specific subset. This distributes the load and provides high availability. If one server fails, the others can continue operating, ensuring your data remains accessible.

**2. Data Partitioning:**  To distribute data effectively, Bistro uses a technique called **data partitioning**.  It divides the data into smaller chunks (partitions) and distributes them across different servers. This allows for parallel processing, improving query performance.  

**3. Replication:** Bistro replicates data across multiple servers to ensure data redundancy and high availability. If one server goes down, the replicated data on other servers ensures that your application can continue to function smoothly.

**4. Consistency Model:** Bistro employs a **relaxed consistency model**. This means that data might not be immediately consistent across all servers, but it guarantees eventual consistency. This approach prioritizes performance and availability over strict, immediate consistency.

**5. Fault Tolerance:**  Bistro is built to be resilient to failures. If one server fails, other servers can take over its responsibilities. This fault tolerance ensures that your data remains safe and accessible even in the face of unexpected issues.

**Key Benefits:**

* **Scalability:** Bistro's distributed architecture allows it to handle massive amounts of data and users without sacrificing performance.
* **High Availability:** Data replication and fault tolerance guarantee that your application remains available even if one or more servers fail.
* **Cost-Effectiveness:** By using multiple servers, Bistro can reduce the overall cost of hardware and infrastructure compared to traditional, centralized databases.

**Think of Bistro like a highly organized restaurant kitchen. Each server is a chef responsible for preparing specific dishes (data partitions). The chefs work together seamlessly, ensuring that the dishes are prepared efficiently and served promptly (data is accessed quickly and reliably).  This collaborative approach makes Bistro a powerful and efficient solution for managing large amounts of data in today's distributed world.**

**Note:** Bistro is a hypothetical system used for educational purposes. Real-world distributed database systems like Cassandra, MongoDB, and CockroachDB utilize similar concepts but have their own unique features and implementations.`;

export const Reader = () => {
  return (
    <ScrollView className="flex flex-col px-8 text-white">
      <View className="py-32">
        <Text className="mb-6 text-5xl font-bold text-gray-100 ">
          Bistro: A Taste of Distributed Databases
        </Text>

        <View className="mb-12 flex flex-row flex-wrap gap-4">
          <Chip title="Chip 1" />
          <Chip title="Chip 1" />
        </View>
        <Markdown
          style={{
            body: { color: 'white', fontSize: 20 },
            heading1: { color: 'purple' },
            code_block: { color: 'black', fontSize: 14 },
          }}>
          {text}
        </Markdown>

        {/* <Text className="h-32">hhihihii</Text> */}
        <Card>
          <View className="w-full">
            <Text className="bold text-lg font-bold text-gray-200">Source</Text>
            <Text className="bold text-lg text-gray-500">url</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = {
  paragraph: 'mb-10 text-2xl text-white text-gray-200',
};
